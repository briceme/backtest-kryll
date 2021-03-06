var MY_ADDRESS = '0x77de842b52cDA39c24093dC1234ee05d10b6cE0d'



var tipButton = document.querySelector('.tip-button')

tipButton.addEventListener('click', function() {

  if (typeof web3 === 'undefined') {
    return renderMessage('<p>You need to install <a href="https://metamask.io">MetaMask </a> to use this feature.  You can manually tips through this ETH address: 0x77de842b52cDA39c24093dC1234ee05d10b6cE0d</p>')
  }

  var user_address = web3.eth.accounts[0]

  web3.eth.sendTransaction({
    to: MY_ADDRESS,
    from: user_address,
    value: web3.toWei('0.05', 'ether'),
  }, function (err, transactionHash) {
    if (err) return renderMessage('There was a problem!: ' + err.message)

    // If you get a transactionHash, you can assume it was sent,
    // or if you want to guarantee it was received, you can poll
    // for that transaction to be mined first.
    renderMessage('Thanks for the generosity!!')
  })
})

function renderMessage (message) {
  var messageEl = document.querySelector('.message')
  messageEl.innerHTML = message
}

