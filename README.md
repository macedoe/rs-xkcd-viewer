# XKCD Viewer

XKCD Viewer is a Rust-based GTK desktop application that allows users to browse XKCD comics easily. It displays the latest comic on startup and provides navigation buttons to view previous and next comics, along with an input field to jump to a specific comic.

## Features

- 🎨 **View Latest XKCD Comic**: Loads the most recent comic on startup.
- ⏪ **Navigate Comics**: Use "Previous" and "Next" buttons to browse comics.
- 🔢 **Jump to a Comic**: Enter a comic number to load it directly.
- 🐝 **See Title & Alt Text**: Displays the comic title and alt text.
- 🌐 **Fetch from XKCD API**: Retrieves comics dynamically using XKCD’s JSON API.

## Screenshots



## Installation

### Prerequisites

Ensure you have the following installed:

- **Rust** (via [rustup](https://rustup.rs/))
- **GTK4 development libraries**\
  On Debian-based systems (Ubuntu, Mint, etc.):
  ```sh
  sudo apt install libgtk-4-dev
  ```

### Build & Run

Clone the repository and run:

```sh
git clone https://github.com/your-username/xkcd-viewer.git
cd xkcd-viewer
cargo run
```

To build a release version:

```sh
cargo build --release
```

The compiled binary will be in `target/release/xkcd-viewer`.

---

## Packaging as a Debian `.deb` Package

### Install Required Tools

```sh
sudo apt install cargo debhelper dh-make
```

### Build the Debian Package

Run the following command:

```sh
cargo install cargo-deb
cargo deb
```

This generates a `.deb` package inside `target/debian/`.

### Install and Run

To install:

```sh
sudo dpkg -i target/debian/xkcd-viewer_1.0.0_amd64.deb
```

Run the application:

```sh
xkcd-viewer
```

---

## Usage

- **Launch the App**: Open it from your applications menu or run:
  ```sh
  xkcd-viewer
  ```
- **View Comics**: Use the navigation buttons or enter a comic number.
- **Quit**: Close the window normally.

---

## Development

If you want to modify the app, ensure you have Rust and GTK installed. You can then edit the source code inside the `src/` directory.

To check for errors and format the code:

```sh
cargo check
cargo fmt
```

To run in debug mode:

```sh
cargo run
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
- Built with **GTK4** and **Rust**.
