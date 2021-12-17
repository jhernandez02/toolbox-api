const controller = {
  reverseText (req, res) {
    const text = req.query.text
    if (!text || text === '') {
      res.status(400).json({ error: 'no text' })
    } else {
      const nText = text.toLowerCase()
      const invert = nText.split('').reverse().join('')
      const isPalindrome = (nText === invert)
      res.json({
        text: invert,
        palindrome: isPalindrome
      })
    }
  }
}

module.exports = controller
