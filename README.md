# Website

# How to try this repo
<h5>First download NodeJs, npm and MeteorJs</h5>

```shell
  $ sudo apt-get install nodejs npm         # For Debian, Ubuntu, Mint...
  $ curl https://install.meteor.com/ | sh
```


<h5>Download Repo and Run App</h5>

```shell
 $ git clone https://github.com/ProjemVar/Website
 $ cd Website
 $ npm start
  > projemvar@1.0.0 start ~/Website
  > npm install; meteor npm install --save bcrypt; meteor

  > bcrypt@1.0.2 install ~/Website/node_modules/bcrypt
  > node-pre-gyp install --fallback-to-build

  node-pre-gyp ERR! Tried to download(404): https://github.com/kelektiv/node.bcrypt.js/releases/download/v1.0.2/bcrypt_lib-v1.0.2-   node-v46-linux-x64.tar.gz 
  node-pre-gyp ERR! Pre-built binaries not found for bcrypt@1.0.2 and node@4.8.0 (node-v46 ABI) (falling back to source compile with node-gyp) 
  make: Entering directory '~/Website/node_modules/bcrypt/build'
  CXX(target) Release/obj.target/bcrypt_lib/src/blowfish.o
  CXX(target) Release/obj.target/bcrypt_lib/src/bcrypt.o
  CXX(target) Release/obj.target/bcrypt_lib/src/bcrypt_node.o
  SOLINK_MODULE(target) Release/obj.target/bcrypt_lib.node
  COPY Release/bcrypt_lib.node
  COPY ~/Website/node_modules/bcrypt/lib/binding/bcrypt_lib.node
  TOUCH Release/obj.target/action_after_build.stamp
  make: Leaving directory '~/Website/node_modules/bcrypt/build'
  projemvar@1.0.0 ~/Website
  └── bcrypt@1.0.2 

  [[[[[ ~/Website ]]]]]       

  => Started proxy.                             
  => Meteor 1.4.4.2 is available. Update this project with 'meteor update'.
  => Started MongoDB.                           
  => Started your app.                          

  => App running at: http://localhost:3000/

```

