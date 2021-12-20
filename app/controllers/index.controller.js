const controller = {
  reverseText (req, res) {
    const text = req.query.text
    if (!text || text === '') {
      res.status(400).json({ error: 'no text' })
    } else {
      const reverseText = text.split('').reverse().join('')
      const cleanText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Z0-9]/ig, '').toLowerCase()
      const checkReverse = cleanText.split('').reverse().join('')
      const isPalindrome = (cleanText === checkReverse)
      res.json({
        text: reverseText,
        palindrome: isPalindrome
      })
    }
  }
}

module.exports = controller
