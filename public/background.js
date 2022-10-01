// chrome.storage.local.get(["badgeText"], ({ }) => {
//     chrome.action.setBadgeText({ text: "" });
// });

  // Listener is registered on startup
// chrome.action.onClicked.addListener(function(tab){
//     chrome.tabs.sendMessage(tab.id,"toggle");
// }); 

chrome.action.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id,"toggle");
  console.log('message sent');
});