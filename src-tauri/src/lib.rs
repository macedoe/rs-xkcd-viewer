mod api;

use api::{fetch_comic, XkcdComic};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
async fn fetch_comic_from_api(num: Option<u32>) -> Result<XkcdComic, String> {
    fetch_comic(num).await
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![fetch_comic_from_api])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
