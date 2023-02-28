# Promineo Tech Week 4

This is the git repository for the class. It will be updated on a class by class basis.

```bash
git clone https://github.com/YOUR-USERNAME/PromineoTech.git
```

## How to Fork a Repository

1. Go to the repository that you want to fork on GitHub.
2. Click the "Fork" button in the top right corner of the page.
3. Choose the account you want to fork the repository to.
4. Wait for the repository to be forked to your account.
5. You now have your own fork of the repository and can make changes to it.

Add the original repository as a remote to your forked repository:

```bash
cd PromineoTech
git remote add upstream https://github.com/Louis345/PromineoTech.git
git remote -v
# You should see your upstream set as https://github.com/Louis345/PromineoTech.git
git config pull.rebase true
```

At any point, if you see the message "Please tell me who you are" in your command line output, you will need to setup your command line to use your Github account. Follow the instruction underneath where it says "Run", replacing "youremail@example.com" and "Your Name" with your information.

Finally, to run the tests for the exercises, you will need to install testing libraries:

```bash
npm install
```

#### Slides Links

[Callback](https://slides.com/jamaltaylor/deck-2a39e3)
[Variables](https://slides.com/jamaltaylor/deck-dbca4e)
[Promises](https://slides.com/jamaltaylor/deck-1da105)

# Promineo Tech Week 5

#### Slides Links

[Object Oriented Programming](https://slides.com/jamaltaylor/deck-aaf6bc)

Instructions to install Node.js on a PC:

Visit the official Node.js website at https://nodejs.org
Download the latest version of Node.js for Windows
Run the downloaded setup file
Follow the on-screen instructions to complete the installation process
Once the installation is complete, open a command prompt and type "node -v" to check if Node.js has been installed successfully
Type "npm -v" to check if npm has been installed successfully

For MAC:

Open the Terminal application
Type brew install node to install Node.js using Homebrew, a popular package manager for MAC
To verify that Node.js was installed correctly, type node -v in the Terminal
To install npm, type npm install npm@latest -g in the Terminal
Note: The above instructions assume that you have Homebrew already installed on your MAC. If not, follow the instructions on this page to install Homebrew: https://brew.sh/
