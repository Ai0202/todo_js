let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

// Todoを画面に追加する処理

  //追加ボタンをクリック
  let add = document.getElementById('add');
  add.addEventListener('click', function() {
    //ユーザーが入力した内容を取得
    let taskName = document.getElementById('task').value;

    //追加する要素を作成
    let not = document.createElement('li');
    // let text = document.createTextNode(taskName);
    // not.appendChild(text);
    not.textContent = taskName;

    //ユーザーが入力した内容を未完了一覧に追加
    document.getElementById('not-yet').appendChild(not);

  })
