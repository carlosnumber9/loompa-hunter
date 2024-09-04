# Loompa Hunter

A web app to keep track of the best oompa loompa workers ahead of the Chocolate Factory's selection process.
This is a project for Napptilus Tech Labs' selection process.

Inside of the web app you will find a list of oompa loompas. You can scroll down and load tons more.
When clicking on any oompa loompa, you will get to the detail page where you can read their description.




## Code features

- **API usage**: All oompa loompas are loaded right from calls to an endpoint, and the dynamic pagination 
allows the user to keep exploring more pages of characters.
- **Filter**: The text input field can be used to find specific workers by full name or profession. The
match text is highlighted over the filtered loompas.
- **Data storage**: Through Redux library, the web app saves the list and details of the oompa loompas and 
keeps the information. The loompa data is reloaded if the stored one stayed for at least one day.




## Run it

- Execute the local development server like this:

```bash
git clone git@github.com:carlosnumber9/loompa-hunter.git
cd loompa-hunter
npm install
npm run dev
```

- Build the production code and store the results into the `dist` directory:

```bash
npm run build
```

- Run a process to execute the linter and check for code mistakes:

```bash
npm run lint
```



## Check it

Visit [the deployed version in Netlify](https://loompa-hunter.netlify.app/) to take a look and get to know the best workers!