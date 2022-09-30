// TODO: Write a function that will return the body of the HTML to the index.js
function createBootstrapCard(managerInfo, teamInfo) {
    let myarray = [];
    console.log(teamInfo.length)
    for(let x = 0; x<teamInfo.length; x++) {
        console.log(teamInfo[x])
        if (teamInfo[x].typeofEmployee === 'Engineer') {
            myarray.push(engineerCard(teamInfo[x]));
        } else {
            myarray.push(internCard(teamInfo[x]))
        }
    }   
    return myarray.join('')
}

function internCard(data) {
    return `<div class="col-4 ml-6 card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${data.typeofEmployee}</div>
    <div class="card-body text-primary">
        <h5 class="card-title">${data.internName}</h5>
        <p class="card-text">
            ${data.internID}
            ${data.internEmail}
            ${data.school}
        </p>
    </div>
    </div>`
}

function engineerCard(data) {
    return `<div class="col-4 ml-6 card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${data.typeofEmployee}</div>
    <div class="card-body text-primary">
        <h5 class="card-title">${data.engineerName}</h5>
        <p class="card-text">
            ${data.engineerID}
            ${data.engineerEmail}
            ${data.engineerGithub}
        </p>
    </div>
    </div>`
}

function generateHTML(companyName ,managerInfo, teamInfo) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${companyName}</title>
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
    <div class="foo">
        My team!
    </div>
    <div class="row justify-content-center">
        <div class="col-4 ml-6 card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Manager</div>
                <div class="card-body text-primary">
                <h5 class="card-title">${managerInfo[0]}</h5>
                <p class="card-text">
                    ${managerInfo[2]}
                    ${managerInfo[1]}
                    ${managerInfo[3]}
                </p>
            </div>
        </div>
        ${createBootstrapCard(managerInfo, teamInfo)}
    </div>
    </body>
    </html>`
}

module.exports = generateHTML;