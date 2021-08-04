## Installation

To run the application node and yarn needs to be installed on the local machine.

Clone the repo.

```sh
git clone https://github.com/vinoth-am/financial-instruments.git
```

Install the dependencies using yarn package manager

```sh
yarn add
```

Run the app

```sh
yarn start
```

Open http://localhost:3000 to view it in the browser.

## Folder Structure

```bash
.src
├── app
│   ├── components
│   │   ├── Filter
│   │   │     ├── Filter.tsx
│   │   │     ├── filterstyle.ts
│   │   │     └── types.ts
│   │   └── Table
│   │         ├── Table.tsx
│   │         ├── tablestyle.ts
│   │         └── types.ts
│   └── Screens
│        └── Home.tsx
├── constants
│   └── index.ts
├── services
│   └── index.ts
├── utils
│   └── index.ts
├── asset
│   └── colors.css
├── App.tsx
├── index.tsx
└── README.md
```
