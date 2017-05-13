# redux-compare-state
**Tracks redux store changes**

_You need 5 steps to start tracking your changes:_
```
1) yarn install
```
**PHANTOMJS SOLUTION:**
```
2) yarn mac-snapshot <the_link_to_your_snapshot_redux_store>
3) yarn mac-state <the_link_to_your_new_redux_store>
```
*Example:*
```
yarn mac-state http://www.zooover.nl/
```
**(ZOOVER) LIGHTER SERVER-SIDE RENDERING / REQUEST+CHEERIO SOLUTION:**
```
2) yarn snapshot <the_link_to_your_snapshot_redux_store>
3) yarn get-state <the_link_to_your_new_redux_store>
```
*Example:*
```
yarn get-state http://www.zooover.nl/
```

**LAST STEPS:**

```
4) yarn build
5) Open index.html from root folder in your browser
```




**NOTES:**

- To run yarn state/snapshot commands on Windows machine you need to download the binary from phantomjs site and put it in *bin/win* folder.
Then you can run scripts as:
```
yarn win-snapshot <the_link_to_your_snapshot_redux_store>
```
*AND*
```
yarn win-state <the_link_to_your_new_redux_store>
```

- You can rewrite STATE_VARIABLE env variable in package.json for state/snapshot tests if your endpoint have whole state in another varaible than default (**\_\_initialState\_\_**)

- Live-reload is enabled when you run:
```
yarn start
```

- There are 2 more commands to show diff output in console with help of chalk! lib

```
1) yarn diff-keys
2) yarn diff-values
```

**Enjoy!**
