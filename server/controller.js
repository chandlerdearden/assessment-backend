let fortunes = ["Don’t hold onto things that require a tight grip.", "Do it scared.", "Look how far you've come.", "Don't let yesterday take up too much of today.","There is no such thing as ugly."]


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {

        let  randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        
        res.status(200).send(randomFortune)
    },

    suggestFortune: (req, res) => {
        let suggestion = req.body[0]
        console.log(suggestion)
        fortunes.push(suggestion)
        console.log(fortunes)

        res.status(200).send(fortunes)
    },
    getFortuneList: (req, res) => {
        res.status(200).send(fortunes)

    },
    deleteFortunes: (req, res) => {
        res.status(200).send(fortunes)
    }
}