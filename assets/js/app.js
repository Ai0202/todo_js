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

    //ボタンを表示する場所
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    //削除ボタン作成
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    //完了ボタン作成
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;

    //ユーザーが入力した内容を未完了一覧に追加
    buttons.appendChild(remove);
    buttons.appendChild(done);
    not.appendChild(buttons);
    document.getElementById('not-yet').appendChild(not);

    //ユーザーが入力した内容を消す
    document.getElementById('task').value = '';

  })
