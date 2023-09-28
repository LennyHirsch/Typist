// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::fs::File;
use std::io::prelude::*;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_content(filename: &str) -> String {
    let content = std::fs::read_to_string(filename).unwrap();
    println!("Got the goods: {}", &content);
    content
}

#[tauri::command]
fn save_content(filename: &str, content: String) {
    let mut file = File::create(filename).unwrap();
    file.write(content.as_bytes()).unwrap();
    println!("File saved.");
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_content, save_content])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
