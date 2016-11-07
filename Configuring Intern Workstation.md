Configuring Intern Workstation

[[TOC]]

## Install Basic Softwares

* Now install the follow packages:

<table>
  <tr>
    <td>$ sudo apt-get update
$ sudo apt-get install -y software-properties-common python-software-properties build-essential curl tree automake libappindicator1 apt-transport-https python-setuptools python-pip</td>
  </tr>
</table>


* Increase [file watcher numbers](https://github.com/gulpjs/gulp/issues/217). This is needed for gulp and Intellij IDEA.

$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

## Install git 

### Ubuntu

$ sudo apt-get install git git-gui

### Mac OSX

$ brew install git

$ nano ~/.profile 

  export PATH=$(brew --prefix git)/bin:$PATH

$ source ~/.profile 

Run the following commands in Mac OS Sierra to fix git gui tools:

<table>
  <tr>
    <td># fix gitk
brew cask uninstall --force tcl && brew cask install tcl

# fix git gui
cp /System/Library/Frameworks/Tk.framework/Versions/8.4/Resources/Wish.app/Contents/MacOS/Wish /usr/local/Cellar/git/2.10.1/share/git-gui/lib/Git\ Gui.app/Contents/MacOS/
</td>
  </tr>
</table>


## Configure git

$ git config --global user.name <your-name>

$ git config --global user.email <your-email@appscode.com>

*Ref*: [http://git-scm.com/download/linux](http://git-scm.com/download/linux)

Note: You can run gitk and git gui command to use UI tools for git.

**# Only for Windows **😭

$ git config --global core.eol lf

$ git config --global core.autocrlf input

With an existing repo that you have already checked out – that has the correct line endings in the repo but not your working copy – you can run the following commands to fix it:

$ git rm -rf --cached .

$ git reset --hard HEAD

Ref:

[http://stackoverflow.com/questions/2517190/how-do-i-force-git-to-use-lf-instead-of-crlf-under-windows](http://stackoverflow.com/questions/2517190/how-do-i-force-git-to-use-lf-instead-of-crlf-under-windows) 

## Configure Diff Tool (optional)

### Ubuntu

sudo apt-get install meld

git config --global diff.external meld

### Mac OSX

See here: [http://twobitlabs.com/2011/08/install-diffmerge-git-mac-os-x/](http://twobitlabs.com/2011/08/install-diffmerge-git-mac-os-x/)

DiffMerge

## Install ssh for AppsCode Diffusion

### Step 1. Ensure you have an SSH client installed

Open a terminal on your local system and enter the following command to identify which version of SSH you have installed.

$ ssh -vOpenSSH_5.6p1, OpenSSL 0.9.8r 8 Feb 2011usage: ssh [-1246AaCfgKkMNnqsTtVvXxYy] [-b bind_address] [-c cipher_spec]           [-D [bind_address:]port] [-e escape_char] [-F configfile]           [-I pkcs11] [-i identity_file]           [-L [bind_address:]port:host:hostport]           [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port]           [-R [bind_address:]port:host:hostport] [-S ctl_path]           [-W host:port] [-w local_tun[:remote_tun]]           [user@]hostname [command]

### Step 2. Set up your default identity

Now, open a terminal in your local system and run ssh-keygen. Press ENTER 3 times to accept default options.

$ ssh-keygen -t rsa -C "<your-email @appscode.com>"Generating public/private rsa key pair.Enter file in which to save the key (/Users/manthony/.ssh/id_rsa): Created directory '/Users/manthony/.ssh'.Enter passphrase (empty for no passphrase): Enter same passphrase again: Your identification has been saved in /Users/manthony/.ssh/id_rsa.Your public key has been saved in /Users/manthony/.ssh/id_rsa.pub.The key fingerprint is:4c:80:61:2c:00:3f:9d:dc:08:41:2e:c0:cf:b9:17:69 manthony@myhost.localThe key's randomart image is:+--[ RSA 2048]----+|*o+ooo.          ||.+.=o+ .         ||. *.* o .        || . = E o         ||    o . S        ||   . .           ||    .            ||                 ||                 |+-----------------+

### Step 3. Start the ssh-agent and load your keys

* Open a terminal window and enter the ps -e | grep [s]sh-agent command to see if the agent is running:

$ ps -e  | grep [s]sh-agent 	9060 ??         0:00.28 /usr/bin/ssh-agent -l

* If the agent isn't running, start it manually with the following command:

$ ssh-agent /bin/bash

* Load your new identity into the ssh-agent management program using the ssh-add command.

$ ssh-add ~/.ssh/id_rsaEnter passphrase for /Users/manthony/.ssh/id_rsa: Identity added: /Users/manthony/.ssh/id_rsa (/Users/manthony/.ssh/id_rsa)

* Use the ssh-add command to list the keys that the agent is managing.

$ ssh-add -l2048 7a:9c:b2:9c:8e:4e:f4:af:de:70:77:b9:52:fd:44:97 /Users/manthony/.ssh/id_rsa (RSA)

### Step 4. Install the public key on your Github account

1. Open a browser and log into Github.

2. Go to **[https://github.com/settings/key**s](https://github.com/settings/keys).

3. The **SSH Keys** page displays. It shows a list of any existing keys. Then, below that, a dialog for labeling and entering a new key.

4. Back in your terminal window, copy the contents of your public key file.

5. For example, in Linux you can cat the contents.

$ cat **~/.ssh/id_rsa.pub**

In Mac OSX the following command copies the output to the clipboard:

$ pbcopy < ~/.ssh/id_rsa.pub

6. Back in your browser, enter a Label for your new key, for example, Default public key.

7. Paste the copied public key into the SSH Key field:

8. Press Add key.

9. The system adds the key to your account.  Bitbucket sends you an email to confirm addition of the key. 

Ref: [Set up SSH for Git and Mercurial on Mac OSX/Linux](https://confluence.atlassian.com/pages/viewpage.action?pageId=270827678)

## Install nodejs and npm

### Ubuntu

We use Node Version Manager ([nvm](https://github.com/creationix/nvm)) to install node.js and npm.

$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash

$ source ~/.bashrc

$ nvm install 4

$ nvm alias default 4

### Mac OSX

$ brew install nodejs

$ npm update npm -g --prefix /usr/local

## Install nodejs packages

$ npm install -g gulp

If the installation fails, try cleaning the cache using the following two commands:

$ npm cache clean

$ bower cache clean

If you are "getting error parsing json", try specifying the registry name:

npm install -g yo --registry [http://registry.npmjs.org/](http://registry.npmjs.org/)

If you are getting permission related errors, run the following commands:

sudo rm -rf ~/.npm

sudo rm -rf ~/npm

