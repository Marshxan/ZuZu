const bannedContent = ["nigger"];

function filter(content) {
    for (let i = 0; i < bannedContent.length; i++) {
        if (content.includes(bannedContent[i])) {
            return true;
        }
    }

    return false;
}

module.exports = filter;