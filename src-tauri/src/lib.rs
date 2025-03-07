mod api;

use api::{XkcdComic, fetch_comic};
use tauri::{AppHandle, Emitter, Manager}; // Import the Manager trait

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
async fn fetch_comic_from_api(app_handle: AppHandle, num: u32) -> Result<XkcdComic, String> {
    // show_alert(&app_handle, format!("Fetching comic {}", num).as_str());

    match fetch_comic(num).await {
        Ok(comic) => Ok(comic),
        Err(err) => {
            show_alert(&app_handle, &err);
            Err(err)
        }
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![fetch_comic_from_api])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn show_alert(app_handle: &AppHandle, msg: &str) {
    if let Some(window) = app_handle.get_webview_window("main") {
        window.emit("alert", msg).unwrap();
    }
}