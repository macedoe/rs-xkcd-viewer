use reqwest;
use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct XkcdComic {
    pub num: u32,
    pub title: String,
    pub img: String,
    pub alt: String,
}

pub async fn fetch_comic(num: Option<u32>) -> Result<XkcdComic, String> {
    let url = match num {
        Some(n) => format!("https://xkcd.com/{}/info.0.json", n),
        None => "https://xkcd.com/info.0.json".to_string(),
    };

    match reqwest::get(&url).await {
        Ok(response) => {
            match response.json::<XkcdComic>().await {
                Ok(comic) => Ok(comic),
                Err(_) => Err("Failed to parse API response".to_string())
            }
        }
        Err(_) => Err("Failed to fetch data from API".to_string())
    }
}
