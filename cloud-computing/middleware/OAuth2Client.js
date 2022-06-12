
const https = require('https');
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  '380950933998-1b6khim9njidbt9q4lqb9bl93f7mduck.apps.googleusercontent.com',
  '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',
  'https://massive-period-344602.et.r.appspot.com/oauth2callback'
);

const scopes = [
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/devstorage.full_control'
];

const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: 'online',
  scope: scopes,
  include_granted_scopes: true
});

let userCredential = null;

const authorization = (req, res) => {
  res.status(300).location(authorizationUrl);
}

const oauth2callback = async (req, res) => {
  const q = req.query;

  let { tokens } = await oauth2Client.getToken(q.code);
  oauth2Client.setCredentials(tokens);
  userCredential = tokens;
}

const revoke = (req, res) => {
  let postData = `token=${userCredential.access_token}`;

  let postOptions = {
    host: 'oauth2.googleapis.com',
    port: '443',
    path: '/revoke',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  // Set up the request
  const postReq = https.request(postOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', d => {
      console.log('Response: ' + d);
    });
  });

  postReq.on('error', error => {
    console.log(error)
  });

  // Post the request with data
  postReq.write(postData);
  postReq.end();

  res.status(200)
    .contentType('application/json')
    .json({ status: 'success', message: 'Token has been revoked' });
}

module.exports = {
  oauth2Client,
  userCredential,
  authorization,
  oauth2callback,
  revoke
};