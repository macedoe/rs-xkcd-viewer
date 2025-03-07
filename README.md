# XKCD Viewer

XKCD Viewer is a Rust-based Tauri desktop application that allows users to browse XKCD comics easily. It displays the latest comic on startup and provides navigation buttons to view previous and next comics, along with an input field to jump to a specific comic.

## Features

- 🎨 **View Latest XKCD Comic**: Loads the most recent comic on startup.
- ⏪ **Navigate Comics**: Use "Previous" and "Next" buttons to browse comics.
- 🔢 **Jump to a Comic**: Enter a comic number to load it directly.
- 🐝 **See Title & Alt Text**: Displays the comic title and alt text.
- 🌐 **Fetch from XKCD API**: Retrieves comics dynamically using XKCD’s JSON API.

## Screenshots

<!-- Add screenshots here -->

## Installation

### Prerequisites

Ensure you have the following installed:

- **Rust** (via [rustup](https://rustup.rs/))
- **Node.js** (for Tauri)
- **Tauri CLI** (install via `cargo install tauri-cli`)

### Build & Run

Clone the repository and run:

```sh
git clone https://github.com/your-username/xkcd-viewer.git
cd xkcd-viewer
npm install
npm run tauri dev
```

To build a release version:

```sh
npm run tauri build
```

The compiled binary and Debian package will be in `src-tauri/target/release/bundle/deb`.

### Install and Run

To install:

```sh
sudo dpkg -i src-tauri/target/release/bundle/deb/XKCD\ Client_0.1.0_amd64.deb
```

Run the application:

```sh
xkcd-client
```

---

## Usage

- **Launch the App**: Open it from your applications menu or run:
  ```sh
  xkcd-client
  ```
- **View Comics**: Use the navigation buttons or enter a comic number.
- **Quit**: Close the window normally.

---

## Development

If you want to modify the app, ensure you have Rust, Node.js, and Tauri installed. You can then edit the source code inside the `src/` directory.

To check for errors and format the code:

```sh
cargo check
cargo fmt
```

To run in debug mode:

```sh
npm run tauri dev
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## Acknowledgments

- Uses the [**XKCD API**](https://xkcd.com/json.html) for fetching comics.
- Built with **Tauri** and **Rust**.