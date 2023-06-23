function validateName (nome) {
    if (nome.length > 200) {
        return false;
    }
    return true;
}



module.exports = {
validateName,
}