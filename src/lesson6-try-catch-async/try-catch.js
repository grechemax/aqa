const backupUrl = 'https://solution4guru.com';
const url = 'https://wrong.com';

async function getResponse() {
    let primaryResponse, backupResponse;
    try {
        console.log(`Fetching primary url: ${url}...`);
        primaryResponse = await fetch(url);
        if (!primaryResponse.ok) {
            throw new Error(`Bad response from primary server: ${primaryResponse.status}`);
        };
    } catch (error) {
        console.error(`Error with primary URL: ${error.message}`);
        // Trying backup URL
        try {
            console.log(`Fetching backup url: ${backupUrl}...`);
            backupResponse = await fetch(backupUrl);
            // Checking response from backup server
            const contentType = backupResponse.headers.get('Content-Type');
            if (!contentType.includes('xml')) {
                throw new Error(`Expected XML, but found: ${contentType}`);
            };
        } catch (backupError) {
            console.error(`Backup failed: ${backupError}`);
        }
    }
}


(async () => {
    await getResponse();
})();
