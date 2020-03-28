
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
  var list = document.querySelectorAll('.grand-node div')
  for (let i = 0; i < list.length; i++)
  {
    var list2 = list[i].querySelectorAll('div')
    while (!list2 === null)
    {
      return 
    }
  }
}
