use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct XkcdComic {
    pub month: String,
    pub num: u32,
    pub link: String,
    pub year: String,
    pub news: String,
    pub safe_title: String,
    pub transcript: String,
    pub alt: String,
    pub img: String,
    pub title: String,
    pub day: String,
}

pub async fn fetch_comic(index: u32) -> Result<XkcdComic, String> {
    let url = if index == 0 {
        "https://xkcd.com/info.0.json".to_string() // Fetch latest comic
    } else {
        format!("https://xkcd.com/{}/info.0.json", index) // Fetch specific comic
    };

    match reqwest::get(&url).await {
        Ok(response) => match response.json::<XkcdComic>().await {
            Ok(comic) => Ok(comic),
            Err(_) => Err("Failed to parse XKCD API response".to_string()),
        },
        Err(_) => Err("Failed to fetch XKCD comic".to_string()),
    }
}
