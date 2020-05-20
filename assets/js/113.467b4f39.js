(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{205:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"interacting-with-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-the-network","aria-hidden":"true"}},[t._v("↳")]),t._v(" Interacting with the Network")]),t._v(" "),a("p",[t._v("After following the instructions in "),a("router-link",{attrs:{to:"/Wizard/GettingStarted.html"}},[t._v("Getting Started")]),t._v(", you should have a fully generated local Smilo network. Here are some ways you can interact with the network to try out the features of Smilo.")],1),t._v(" "),a("h2",{attrs:{id:"start-the-network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-network","aria-hidden":"true"}},[t._v("↳")]),t._v(" Start the Network")]),t._v(" "),a("p",[t._v("If you haven't done so already, go into the network directory and run start.sh ("),a("code",[t._v("network/3-nodes-raft-tessera-bash")]),t._v(" is the quickstart default, if you changed any settings the folder name will be different).")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" network/3-nodes-raft-tessera-bash\n./start.sh\n")])])]),a("p",[t._v("Note: Run "),a("code",[t._v("./stop.sh")]),t._v(" if you want to stop all Smilo/geth, tessera, and cakeshop instances running on your machine")]),t._v(" "),a("h2",{attrs:{id:"demonstrating-privacy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demonstrating-privacy","aria-hidden":"true"}},[t._v("↳")]),t._v(" Demonstrating Privacy")]),t._v(" "),a("p",[t._v("The network comes with some simple contracts to demonstrate the privacy features of Smilo.  In this demo we will:")]),t._v(" "),a("ul",[a("li",[t._v("Send a private transaction between nodes 1 and 2")]),t._v(" "),a("li",[t._v("Show that only nodes 1 and 2 are able to view the initial state of the contract")]),t._v(" "),a("li",[t._v("Have Node 1 update the state of the contract and, once the block containing the updated transaction is validated by the network, again verify that only nodes 1 and 2 are able to see the updated state of the contract")])]),t._v(" "),a("h2",{attrs:{id:"using-geth-from-the-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-geth-from-the-command-line","aria-hidden":"true"}},[t._v("↳")]),t._v(" Using Geth from the Command Line")]),t._v(" "),a("h3",{attrs:{id:"sending-a-private-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-a-private-transaction","aria-hidden":"true"}},[t._v("↳")]),t._v(" Sending a private transaction")]),t._v(" "),a("p",[t._v("Send an example private contract from Node 1 to Node 2 (this is denoted by Node 2's public key passed via "),a("code",[t._v('privateFor: ["QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc="]')]),t._v(" in "),a("code",[t._v("private-contract.js")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./runscript.sh private-contract.js\n")])])]),a("p",[t._v("Make note of the "),a("code",[t._v("TransactionHash")]),t._v(" printed to the terminal.")]),t._v(" "),a("h3",{attrs:{id:"inspecting-the-smilo-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inspecting-the-smilo-nodes","aria-hidden":"true"}},[t._v("↳")]),t._v(" Inspecting the Smilo nodes")]),t._v(" "),a("p",[t._v("We can inspect any of the Smilo nodes by using "),a("code",[t._v("./attach.sh")]),t._v(" to open the Geth JavaScript console.  For this demo, we will be inspecting Node 1, Node 2, and Node 3.")]),t._v(" "),a("p",[t._v("It is recommended to use separate terminal windows for each node we are inspecting.  In each terminal, ensure you are in your network's directory, then:")]),t._v(" "),a("ul",[a("li",[t._v("In terminal 1 run "),a("code",[t._v("./attach.sh 1")]),t._v(" to attach to node 1")]),t._v(" "),a("li",[t._v("In terminal 2 run "),a("code",[t._v("./attach.sh 2")]),t._v(" to attach to node 2")]),t._v(" "),a("li",[t._v("In terminal 3 run "),a("code",[t._v("./attach.sh 3")]),t._v(" to attach to node 3")])]),t._v(" "),a("p",[t._v("To look at the private transaction that was just sent, run the following command in one of the terminals:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("eth.getTransaction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xe28912c5694a1b8c4944b2252d5af21724e9f9095daab47bac37b1db0340e0bf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("where you should replace this hash with the TransactionHash that was previously printed to the terminal.  This will print something of the form:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  blockHash: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x4d6eb0d0f971b5e0394a49e36ba660c69e62a588323a873bb38610f7b9690b34"')]),t._v(",\n  blockNumber: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(",\n  from: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xed9d02e382b34818e88b88a309c7fe71e65f419d"')]),t._v(",\n  gas: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4700000")]),t._v(",\n  gasPrice: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n  hash: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xe28912c5694a1b8c4944b2252d5af21724e9f9095daab47bac37b1db0340e0bf"')]),t._v(",\n  input: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x58c0c680ee0b55673e3127eb26e5e537c973cd97c70ec224ccca586cc4d31ae042d2c55704b881d26ca013f15ade30df2dd196da44368b4a7abfec4a2022ec6f"')]),t._v(",\n  nonce: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n  r: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x4952fd6cd1350c283e9abea95a2377ce24a4540abbbf46b2d7a542be6ed7cce5"')]),t._v(",\n  s: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x4596f7afe2bd23135fa373399790f2d981a9bb8b06144c91f339be1c31ec5aeb"')]),t._v(",\n  to: null,\n  transactionIndex: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(",\n  v: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x25"')]),t._v(",\n  value: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Note the "),a("code",[t._v("v")]),t._v(" field value of "),a("code",[t._v('"0x25"')]),t._v(" or "),a("code",[t._v('"0x26"')]),t._v(" (37 or 38 in decimal) which indicates this transaction has a private payload (input).")]),t._v(" "),a("h4",{attrs:{id:"checking-the-state-of-the-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-the-state-of-the-contract","aria-hidden":"true"}},[t._v("↳")]),t._v(" Checking the state of the contract")]),t._v(" "),a("p",[t._v("For each of the 3 nodes we'll use the Geth JavaScript console to create a variable called "),a("code",[t._v("address")]),t._v(" which we will assign to the address of the contract created by Node 1.  The contract address can be found in two ways:")]),t._v(" "),a("ul",[a("li",[t._v("In Node 1's log file: "),a("code",[t._v("qdata/logs/1.log")])]),t._v(" "),a("li",[t._v("By reading the "),a("code",[t._v("contractAddress")]),t._v(" param after calling "),a("code",[t._v("eth.getTransactionReceipt(txHash)")]),t._v(" ("),a("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgettransactionreceipt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ethereum API documentation"),a("OutboundLink")],1),t._v(") where "),a("code",[t._v("txHash")]),t._v(" is the hash printed to the terminal after sending the transaction.")])]),t._v(" "),a("p",[t._v("Once you've identified the contract address, run the following command in each terminal:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> var address = "0x1932c48b2bf8102ba33b4a6b545c32236e342f34"; //replace with your contract address \n')])])]),a("p",[t._v("Next we'll use "),a("code",[t._v("eth.contract")]),t._v(" to define a contract class with the simpleStorage ABI definition in each terminal:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> var abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"}];\n> var private = eth.contract(abi).at(address)\n')])])]),a("p",[t._v("The function calls are now available on the contract instance and you can call those methods on the contract. Let's start by examining the initial value of the contract to make sure that only nodes 1 and 2 can see the initialized value.")]),t._v(" "),a("ul",[a("li",[t._v("In terminal window 1 (Node 1):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> private.get()\n42\n")])])]),a("ul",[a("li",[t._v("In terminal window 2 (Node 2):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> private.get()\n42\n")])])]),a("ul",[a("li",[t._v("In terminal window 3 (Node 3):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> private.get()\n0\n")])])]),a("p",[t._v("So we can see nodes 1 and 2 are able to read the state of the private contract and its initial value is 42.  If you look in "),a("code",[t._v("private-contract.js")]),t._v(" you will see that this was the value set when the contract was created.  Node 3 is unable to read the state.")]),t._v(" "),a("h3",{attrs:{id:"updating-the-state-of-the-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-state-of-the-contract","aria-hidden":"true"}},[t._v("↳")]),t._v(" Updating the state of the contract")]),t._v(" "),a("p",[t._v("Next we'll have Node 1 set the state to the value "),a("code",[t._v("4")]),t._v(" and verify only nodes 1 and 2 are able to view the new state.")]),t._v(" "),a("p",[t._v("In terminal window 1 (Node 1):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> private.set(4,{from:eth.accounts[0],privateFor:["QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc="]});\n"0xacf293b491cccd1b99d0cfb08464a68791cc7b5bc14a9b6e4ff44b46889a8f70"\n')])])]),a("p",[t._v("You can check the log files in "),a("code",[t._v("qdata/logs/")]),t._v(" to see each node validating the block with this new private transaction. Once the block containing the transaction has been validated we can once again check the state from each node 1, 4, and 2.")]),t._v(" "),a("ul",[a("li",[t._v("In terminal window 1 (Node 1):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> private.get()\n4\n")])])]),a("ul",[a("li",[t._v("In terminal window 2 (Node 2):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> private.get()\n4\n")])])]),a("ul",[a("li",[t._v("In terminal window 3 (Node 3):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> private.get()\n0\n")])])]),a("p",[t._v("And there you have it: All nodes are validating the same blockchain of transactions, with the private transactions containing only a 512 bit hash in place of the transaction data, and only the parties to the private transactions being able to view and update the state of the private contracts.")]),t._v(" "),a("h2",{attrs:{id:"using-remix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-remix","aria-hidden":"true"}},[t._v("↳")]),t._v(" Using Remix")]),t._v(" "),a("p",[t._v("You can also try to do all of the above steps using the Storage contract in "),a("a",{attrs:{href:"http://remix.ethereum.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remix"),a("OutboundLink")],1),t._v(" by using our "),a("router-link",{attrs:{to:"/RemixPlugin/Overview.html"}},[t._v("Smilo Plugin")]),t._v(". Follow the instructions for activating the remix plugin in "),a("router-link",{attrs:{to:"/RemixPlugin/GettingStarted.html"}},[t._v("Getting Started")]),t._v(", connect to the nodes using their Smilo and Tessera urls:")],1),t._v(" "),a("p",[t._v("Node 1 defaults:")]),t._v(" "),a("ul",[a("li",[t._v("Smilo RPC: "),a("code",[t._v("http://localhost:22000")])]),t._v(" "),a("li",[t._v("Tessera: "),a("code",[t._v("http://localhost:9081")])])]),t._v(" "),a("p",[t._v("Node 2 defaults:")]),t._v(" "),a("ul",[a("li",[t._v("Smilo RPC: "),a("code",[t._v("http://localhost:22001")])]),t._v(" "),a("li",[t._v("Tessera: "),a("code",[t._v("http://localhost:9082")])])]),t._v(" "),a("p",[t._v("Node 3 defaults:")]),t._v(" "),a("ul",[a("li",[t._v("Smilo RPC: "),a("code",[t._v("http://localhost:22002")])]),t._v(" "),a("li",[t._v("Tessera: "),a("code",[t._v("http://localhost:9083")])])]),t._v(" "),a("h2",{attrs:{id:"using-cakeshop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-cakeshop","aria-hidden":"true"}},[t._v("↳")]),t._v(" Using Cakeshop")]),t._v(" "),a("p",[t._v("If you chose to include Cakeshop in your network (included in the Quickstart option), you can try to do the above steps in that UI as well.")]),t._v(" "),a("ol",[a("li",[t._v("Open http://localhost:8999 in your browser.")]),t._v(" "),a("li",[t._v("Go to the Contracts tab and Deploy the contract registry")]),t._v(" "),a("li",[t._v("Go to the Sandbox, select the SimpleStorage sample contract from the Contract Library, and deploy with Private For set to the second node's public key ("),a("code",[t._v("QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=")]),t._v(")")]),t._v(" "),a("li",[t._v("Go back to the main Cakeshop page, go to the Contracts tab again, and you should be able to see the contract you just deployed.")]),t._v(" "),a("li",[t._v("Interact with it from there, and switch between nodes using the dropdown in the top right corner of the page.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);