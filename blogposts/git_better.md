# Git for beginners

> **Note**
> If you already know Git, scroll down a bit and you might find some useful tutorials, like how you can host Git yourself.

This tutorial assumes that you know what VCS (Version Control System) is and why they are used.

# Setting up Git
After installing git for your platform, Git must know your username and email address if you want to push code to GitHub, GitLab or other servers.

In order to add your username and email address, run these commands in a terminal/command prompt:
```bash
git config --global user.name "<your username>"
git config --global user.email "<your email>"
```
The `global` flag tells git to use the given username and email for all your future projects. Without the global flag, it would only configure it for that one project. You can change these values at any time.

> **Info**
 Another command that you might want to run if you're going to use GitHub is the following:
> ```bash
> git config --global init.defaultbranch main
> ```
>This changes the default branch name from master to main. It is not necessary, but it has become the convention lately.

# Making a repository
To make a local repository, you can create a directory and then use the `git init` command:
```bash
mkdir my_project
cd my_project
git init
```

# Adding SSH key to your GitHub account
Before you can continue with managing repositories on your computer, you might need to add an SSH key to your account. Here's [a guide for GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

This should be a similar process for other Git repositories such as GitLab.
First, start with running this command. This will generate a new ssh key. Make sure that your `~/.ssh` directory is empty (or doesn't exist) before you run this command.
```bash
ssh-keygen -t ed25519 -C "<your email address here>"
```
Then 2 prompts should appear.

- Where to save the file. If it's your first time, it's better to follow this tutorial and just press the enter key.
- Passphrase: This field is optional. Press Enter for no passphrase.

If you did this correctly, there should be a file named `id_ed25519.pub` located in your `~/.ssh` (`~` is alternative syntax for `$HOME` or `/home/<your username>/.ssh`) directory. This is the public key. 

> **Warning** The other file with no `.pub` extension is your private key and **you shouldn't share it with anyone**.

Now, run this command:
```bash
cat ~/.ssh/id_ed25519.pub
```
The output of this command should start with `ssh-ed25519`.
Copy the output of previous command, and go to [Settings > SSH and GPG keys > New SSH Key](https://github.com/settings/keys), click on "New SSH key" and paste it in the large text input. Give your key a title and click on "Add SSH key".

### This article is not complete. More coming soon.