---
title: '用意するもの'
description: '離れて暮らす親を見守る機材の紹介。リモコンや温度計など、家庭用のスマートホーム機器の組み合わせで揃います。'
pubDate: '2026-05-10'
chapterNumber: 2
---

親が離れて暮らしていて、仕事も休めない、お金もそんなにかけられない、毎週は帰れない、施設に入れる選択肢もない。そういう状況に置かれたとき、毎日の様子をどう見るか、いざというときどう動くかは、けっこう難しい問題です。

電話で毎日確認するのは本人にとっても面倒だし、こちらから見たいときに見られるわけでもない。

ここ数年、家電をスマホから操作できる機材や、室内の様子を見られる小さなカメラ、温度や湿度を遠隔から確認できるセンサーが、家電量販店やAmazonで普通に買えるようになりました。これらを組み合わせると、離れていても **「家の中が今どうなっているか」をある程度把握できて、必要なときだけ介入できる仕組み** が、合計1〜2万円くらいで作れます。

このページでは、まずどんな機材があって、それぞれが「何のために使うものか」を紹介します。具体的な組み方は次の章で書きます。

## 全体像

組む目的は3つです。

- **離れていても見える**：今どうしてるか、室温は適切か、変なことが起きていないか
- **必要なときだけ手を出せる**：暑そうだったら冷房を点ける、夜トイレに起きたら電気を点ける
- **本人の生活を奪わない**：何でも自動化して本人が動かなくなる、ということを避ける

この3つを最低コストで実現する組み合わせが、以下です。

## 機材の役割

機材それぞれが「家庭の何の役割を担うか」を、なるべく一般的な言葉で書きます。製品名や型番は後ろに。

### 室内の様子を見るカメラ

部屋の中に置いて、その映像をスマホアプリで見られるカメラです。マイクで向こうの音も拾えるので、何かあったときに気付ける範囲が広がります。

家を離れていると「今どうしてるかな」が一日に何回もよぎります。電話するほどじゃない、けど気になる。そのちょっとした不安を、カメラを開けば数秒で解消できる。これが大きい。

具体的な製品としては **TP-Link の Tapo C200**（3,000〜5,000円）が手頃です。家電量販店でも普通に売ってます。

カメラ自体に双方向通話の機能もついていますが、**遅延が大きく会話のリズムが崩れる** ので、声をかけたいときは Echo Dot に向かって Alexa の「呼びかけ」を使うか、LINE などの通話アプリを別で開くのがおすすめです（後の章で詳しく）。

### 室温と湿度を見るセンサー

小さな置物で、室内の温度と湿度を測ってスマホアプリに送ってくれます。

エアコンには温度センサーが内蔵されていますが、それは「エアコン本体の場所」の温度なので、本人が座っている場所とは数℃ズレることがあります。本人の居る場所に小さなセンサーを置いておけば、外からスマホで「今リビング26℃か、ちょっと暑いな」と分かります。

具体的な製品としては **SwitchBot 温湿度計**（2,000円前後）。

### 家電のリモコンの代わりになる装置

エアコン、照明、テレビなどを遠隔から操作するためには、その家電が **リモコンで動かせる** ことが前提になります。家電自体を改造するのではなく、「**リモコンと同じ信号をスマホから出す**」のがこの装置の仕組みです。

家電量販店で売られている最近のエアコン・照明・テレビは、ほぼ赤外線リモコン式なので対象になります。一方、リモコンがなく本体ボタンを直接押すタイプの家電（古い扇風機、除湿機、こたつなど）は、後述の指スイッチで対応します。

リモコンの赤外線信号を学習して、スマホアプリから同じ信号を出してくれるのが、この装置です。具体的な製品としては **SwitchBot Hub mini**（4,000〜8,000円）。

これを実家の家電が見える場所に1台置いておけば、エアコン・照明・テレビをスマホから操作できます。「今暑そう」と思ったときに、電話で「冷房つけて」と頼むより早く点けられます。

#### 届く範囲は「見えるところ」だけ

Hub mini が出す赤外線は、普通のリモコンと同じく **見通しの効く範囲（10〜15畳程度）にしか届きません**。

- 壁を挟むと届かない
- 家具で大きく遮られていると届かない
- 別の部屋の家電は操作できない

なので、リビングと寝室の両方で家電を操作したい場合などは、**部屋ごとに Hub mini を1台ずつ** 置くのが現実的です。我が家ではリビングと寝室で2台体制で運用しています。

#### 買う前に確認しておくこと

操作したい家電について、

- リモコンが付いているか
- リモコンの先端に小さな半透明の窓があるか（赤外線リモコンの目印）
- Hub を置きたい場所から、操作したい家電が「見える」位置にあるか

を確認しておくと、「買ったけど届かない・効かない」というハズレを避けられます。

#### Hub 2 との違い

Hub 2 という上位機種もありますが、温湿度計が本体に内蔵されているだけ（しかも Hub 2 が置いてある場所の温度しか測れない）なので、本人がいる場所の温度を測りたいなら Hub mini ＋ 別売の温湿度計の組み合わせのほうが融通がききます。

### 物理ボタンを押してくれるロボット

リモコンが効かない家電（古い扇風機、除湿機、こたつなど、ボタンを直接押すタイプ）に対して、両面テープで貼っておくと、スマホからの指令でアームが物理的にボタンを押してくれる小さな装置があります。

電池駆動なので電池切れには注意。**OFF し忘れたままになっても安全な家電** に対して使うのがコツです。例えば除湿機なら多くの機種に12時間自動オフ機能がついているので、OFF を忘れたとしても家電本体が自動で切ってくれます。「家電に元々ついてる安全機能を信頼する」という感覚です。

具体的な製品としては **SwitchBot 指スイッチ（SwitchBot Bot）**（4,000円前後）。

### 本人側で「Alexa」と呼びかけて使うスピーカー

実家のリビングや寝室に置く、小さなスマートスピーカーです。「アレクサ、おはよう」「アレクサ、5分タイマー」「アレクサ、明日の天気」のように呼びかけると応えてくれます。

これがあると、本人がスマホやリモコンを操作しなくても、声で家電を点けたり、タイマーを使ったり、天気予報を聞いたりできます。視力や手元の動作が落ちてきても使えるので、年齢が上がるほど価値が出てくる機材です。

家族との直通通話機能もあり、家族で連絡網に入れておくこともできます。

具体的な製品としては **Amazon Echo Dot 第4世代以降**（5,000円前後）。

### 見守る側で使う Android 端末

カメラ・温湿度計・家電操作のアプリを動かす端末です。スマートフォン1台、または余っている Android タブレットのどちらでもOK。**むしろタブレットのほうが画面が大きい分、温湿度の数字や映像が確認しやすい** ので、家にタブレットが余っていればそちらを使うのがおすすめです。

新しく買う必要はなく、古い Android 端末の流用でじゅうぶんです。

iPhone・iPad でも各アプリは動きますが、Android のほうが画面分割（後述）の使い勝手が良く、複数アプリを同時表示しながら使う運用に向いています。

### 介護用の専用 Gmail アドレス（あると便利）

機材ではないですが、用意しておくと運用がぐっと楽になるのが **介護用の専用 Gmail アドレス** です。

Tapo・SwitchBot・Alexa は、それぞれログイン用のアカウントが必要です。家族の個人メアドで登録してしまうと、

- どのアプリにどのメアドで登録したか分からなくなる
- 家族で共有したいときに、自分のプライベートメアドを共有することになる
- 通知が個人メインメアドに混ざって見落としやすい
- 担当を別の家族に引き継ぐときに、自分のメアドごと渡すことになる

そこで、最初に **「介護用」として新しい Gmail アドレスを1つ取得** して、すべての機材アプリのログインをそこに集約しておくのがおすすめです。Google アカウントの新規作成は無料で、5分くらいで終わります。

このメリット：

- ログイン情報が1つにまとまる
- 家族でメアド・パスワードを共有すれば、全アプリに同じ条件でアクセスできる
- 通知が介護関連だけに絞られて、見落としにくくなる
- 引き継ぎが必要になったときも、メアドごと渡せばいい

最初の段階でやっておくと、あとで「あれ、このアプリどのメアドで登録したっけ」と詰まらずに済みます。

## 既存の家電は買い替えなくていい

実家にある家電はそのまま使います。

- **エアコン**：赤外線リモコンで動くものなら、そのまま遠隔操作できます
- **照明（シーリングライト）**：赤外線リモコン式なら同上。動線に合わせた一括点灯（後の章で）も可能
- **テレビ**：リモコン操作対応。Fire TV と組めば離れた場所からの操作支援もできる
- **加湿器・除湿機**：物理ボタン式なら指スイッチで対応
- **ストーブ**：本人がボタンを押す運用のまま残します（理由は後の章で）
- **サーキュレーター**：物理ボタン式なら指スイッチ。部屋干し乾燥にも使えます

## 何を最初に買えばいいか

一気に揃える必要はありません。困った段階で足していくのが、無理なく続けるコツです。

1. **最初の1台：カメラ（Tapo C200）**  
   これだけでも「今どうしてるか分かる」効果は大きいです。まず置いてみて、運用が回るか確かめる
2. **次に：温湿度計と Hub mini**  
   環境がちゃんと見えるようになり、エアコンを遠隔で点けられるようになります
3. **必要に応じて：Echo Dot、指スイッチ、追加カメラ**  
   実際に運用してみて「ここが手薄」と気付いた部分を埋める

## 価格まとめ

| 機材 | 役割 | 目安価格 | 商品を見る |
|------|------|---------|------|
| カメラ（Tapo C200） | 様子を見る・話す | 3,000〜5,000円 | <a href="#" rel="sponsored noopener">楽天</a> / <a href="#" rel="sponsored noopener">Amazon</a> |
| 温湿度計（SwitchBot） | 室温・湿度を遠隔で見る | 2,000円前後 | <a href="#" rel="sponsored noopener">楽天</a> / <a href="#" rel="sponsored noopener">Amazon</a> |
| Hub mini（SwitchBot） | リモコン家電を遠隔操作（部屋ごとに1台） | 4,000〜8,000円 | <a href="#" rel="sponsored noopener">楽天</a> / <a href="#" rel="sponsored noopener">Amazon</a> |
| 指スイッチ（SwitchBot Bot） | 物理ボタン家電を押す | 4,000円前後 | <a href="#" rel="sponsored noopener">楽天</a> / <a href="#" rel="sponsored noopener">Amazon</a> |
| Echo Dot | 本人側の音声操作 | 5,000円前後 | <a href="#" rel="sponsored noopener">楽天</a> / <a href="#" rel="sponsored noopener">Amazon</a> |
| Android 端末（スマホ/タブレット） | 見守る側の操作端末 | 0円〜（流用） | — |

> 上の表中のリンク先には、Amazonアソシエイトおよび楽天アフィリエイトの広告（PR）が含まれます。3年使ってきた実体験ベースで紹介していますが、購入の判断はご自身でお願いします。

最低構成（カメラ＋温湿度計＋Hub mini）なら **約1万円**。Echo Dot や指スイッチを足しても **2万円で収まります**。

複数の部屋で家電を操作したい場合は、Hub mini を部屋ごとに増やすぶん上振れします（リビング＋寝室で2台運用すると、Hub mini だけで1万円前後）。

## 商品リンク（PR）

ここからは具体的な購入リンクです。**この先のリンクは Amazon アソシエイトおよび楽天アフィリエイトの広告（PR）を含みます**。3年使ってきた実体験ベースで紹介していますが、購入の判断はご自身でお願いします。

### カメラ（Tapo C200）

<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");
msmaflink({"n":"TP-Link（ティーピーリンク） パンチルト ネットワークWi-Fiカメラ Tapo C200\/R ホワイト","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/ksdenki\/cabinet\/images","p":["\/88_5\/6935364089788_5.jpg","\/88_1\/6935364089788_1.jpg","\/88_2\/6935364089788_2.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/ksdenki\/6935364089788\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/ksdenki\/6935364089788\/","a_id":5545362,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1}],"eid":"Qtcd3","s":"s"});
</script>
<div id="msmaflink-Qtcd3">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->

### 温湿度計（SwitchBot）

<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");
msmaflink({"n":"［楽天ランキング1位獲得］［暑さ対策フェア］ SwitchBot 温湿度計 デジタル 熱中症対策 スタンド マグネット スマートハウス IoT # SWITCHBOTMETER-GH スイッチボット (スマート家電・健康管理) b9","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/kitcut\/cabinet","p":["\/item\/157\/p-417865.jpg","\/realtime\/-497063.jpg","\/item\/157\/r-417869.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/kitcut\/517049\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/kitcut\/517049\/","a_id":5545362,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1}],"eid":"nO2Xe","s":"s"});
</script>
<div id="msmaflink-nO2Xe">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->

### Hub mini（SwitchBot）

<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");
msmaflink({"n":"【300万P抽選！エントリーでP2倍！】スイッチボット スマートリモコン ハブミニ 赤外線家電を管理 スケジュール 遠隔操作 エアコン 汎用（ブラック\/ホワイト）","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/switchbot\/cabinet","p":["\/09377790\/11880636\/11880637\/imgrc0089787176.jpg","\/home\/09454583\/imgrc0076999146.jpg","\/09377790\/09377809\/09377886\/imgrc0079836527.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/switchbot\/10000005\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/switchbot\/10000005\/","a_id":5545362,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1}],"eid":"IRvvw","s":"s"});
</script>
<div id="msmaflink-IRvvw">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->

### 指スイッチ（SwitchBot Bot）

<!-- START MoshimoAffiliateEasyLink -->
<script type="text/javascript">
(function(b,c,f,g,a,d,e){b.MoshimoAffiliateObject=a;
b[a]=b[a]||function(){arguments.currentScript=c.currentScript
||c.scripts[c.scripts.length-2];(b[a].q=b[a].q||[]).push(arguments)};
c.getElementById(a)||(d=c.createElement(f),d.src=g,
d.id=a,e=c.getElementsByTagName("body")[0],e.appendChild(d))})
(window,document,"script","//dn.msmstatic.com/site/cardlink/bundle.js?20220329","msmaflink");
msmaflink({"n":"SwitchBot Bot スイッチ 遠隔操作 スマート家電 簡単取付 スイッチボット (スマート家電スイッチ) [電池タイプ]","b":"","t":"","d":"https:\/\/thumbnail.image.rakuten.co.jp","c_p":"\/@0_mall\/kitcut-ps\/cabinet\/item\/153","p":["\/p-270382.jpg","\/p-270384.jpg","\/r-270380.jpg"],"u":{"u":"https:\/\/item.rakuten.co.jp\/kitcut-ps\/51704324271\/","t":"rakuten","r_v":""},"v":"2.1","b_l":[{"id":1,"u_tx":"楽天市場で見る","u_bc":"#f76956","u_url":"https:\/\/item.rakuten.co.jp\/kitcut-ps\/51704324271\/","a_id":5545362,"p_id":54,"pl_id":27059,"pc_id":54,"s_n":"rakuten","u_so":1}],"eid":"seRmG","s":"s"});
</script>
<div id="msmaflink-seRmG">リンク</div>
<!-- MoshimoAffiliateEasyLink END -->

### Echo Dot

（リンク準備中）

## 安く手に入れるには

このあたりの機材、定価で買う必要はないです。新品で買う方法と、中古を活用する方法、両方視野に入れておくと費用を抑えられます。

### 新品ならセール時に

- **Amazon ブラックフライデー**（11月下旬）
- **Amazon プライムデー**（7月）
- **楽天お買い物マラソン**

このあたりで30〜40%引きが普通です。家電量販店で買うより安くなります。急ぎでなければ、年に数回あるセールを待つのが正解です。

### 中古・フリマも視野に入れていい

メルカリ・Yahoo!フリマ・ラクマといったフリマサイトでも、Tapo C200 / SwitchBot 温湿度計 / Hub mini あたりは新品の半額前後で見つかります。スマートホーム機器は買ったけど結局使わなかった、という出品が多く、状態のいいものに出会いやすいジャンルです。

選ぶときに気をつけたい点：

- 「動作確認済み」「使用期間が短い」と書かれているものを選ぶ
- 出品者の取引履歴・評価を見る
- メーカー保証は切れている前提で考える
- 写真でロット番号やシリアルが映っているか、本物か確認する

本人側で長期に使う Echo Dot や、すべての家電操作の起点になる Hub mini は、新品＋保証つきで揃えるほうが安心です。一方、Tapo カメラの2台目以降や、SwitchBot の温湿度計の追加は、中古でも実用上の差を感じにくいです。

## まとめ

- 機材は普通のスマートホーム機器を組み合わせるだけ
- 目的は「見える」「手を出せる」「本人の生活を奪わない」の3つ
- 全部で1〜2万円、無料アプリ4つ、既存家電そのまま
- 一気に揃えなくてよい。カメラ1台から始めて、必要に応じて足す

それぞれの機材を実際にどう組み合わせて運用しているかは、次の章から書いていきます。
