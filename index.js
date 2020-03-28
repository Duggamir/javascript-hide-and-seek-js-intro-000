
function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n)
{
  var list = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < list.length; i++)
  {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}

function deepestChild()
{
  var depth = 0
  var deepestNode
  var document.querySelector
}
