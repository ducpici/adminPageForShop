

const getStatisticPage = (req, res) => {
    res.render('statistic.ejs', {user_session: req.session.user})
}

module.exports= {
    getStatisticPage
}