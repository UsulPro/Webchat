import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store'

import { getChannelPreferences } from 'actions/channel'
import App from 'containers/App'

if (!global._babelPolyfill) {
  require('babel-polyfill')
}

document.body.innerHTML += '<div id="recast-webchat-div"></div>'
const root = document.getElementById('recast-webchat-div')
const script = document.currentScript || document.getElementById('recast-webchat')

const channelId = script.getAttribute('channelId')
const token = script.getAttribute('token')

if (root && channelId && token) {
  getChannelPreferences(channelId, token).then(preferences => {
    preferences.headerColor = '#FFFFFF';

    ReactDOM.render(
      <Provider store={store}>
        <App token={token} channelId={channelId} preferences={preferences} />
      </Provider>,
      root,
    )
  })
}
