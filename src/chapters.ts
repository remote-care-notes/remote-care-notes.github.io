// 全15章のメタ情報。トップ（index.astro）と記事一覧（blog/index.astro）で共有する。
// 記事本体の frontmatter とは別に、一覧・導線用の短い説明（desc）をここで一元管理する。

export interface Chapter {
	num: number;
	slug: string;
	title: string;
	desc: string;
}

export const CHAPTERS: Chapter[] = [
	{ num: 1, slug: 'hajimeni', title: 'はじめに', desc: 'このサイトでやりたいこと、やらないこと' },
	{ num: 2, slug: 'gear', title: '用意するもの', desc: '1〜2万円の機材セットと無料アプリ' },
	{ num: 3, slug: 'roles', title: '機材編', desc: 'Tapo / SwitchBot / Alexa の役割分担' },
	{ num: 4, slug: 'morning', title: '朝のルーティン', desc: '起床の2時間前にエアコンを仕上げて、Alexaに挨拶してもらう' },
	{ num: 5, slug: 'temperature', title: '室温と湿度の管理', desc: '介護現場の目安と、本人の体感に合わせた調整' },
	{ num: 6, slug: 'auto-control', title: '暑さ寒さで自動オン・オフ', desc: 'SwitchBot のシーンで温度に合わせてエアコンを動かす' },
	{ num: 7, slug: 'fall-prevention', title: '照明と転倒予防', desc: '「アレクサ、トイレ」一発で動線全部点灯した話' },
	{ num: 8, slug: 'remote-help', title: 'テレビやネットの操作を遠隔から手助け', desc: 'Alexa + Fire TV + カメラの組み合わせ' },
	{ num: 9, slug: 'alexa-words', title: 'Alexa の話しかける言葉は本人に合わせる', desc: '普段使ってる言葉をそのままに' },
	{ num: 10, slug: 'timer', title: '運動と発話の仕組み', desc: 'Alexaタイマーで5分間の室内往復' },
	{ num: 11, slug: 'manual-tasks', title: '頭を使う場面を残す', desc: 'ストーブのオンタイマーは本人に時間計算してもらう' },
	{ num: 12, slug: 'visit-support', title: '訪問サービスを支える環境', desc: 'ヘルパーさんが働きやすい部屋を遠隔から整える' },
	{ num: 13, slug: 'family', title: '家族で分担する', desc: '遠隔（システム担当）× 近所（駆けつけ担当）' },
	{ num: 14, slug: 'imperfect', title: '完璧を目指さない', desc: '家電に元々ついてる安全機能を信頼する' },
	{ num: 15, slug: 'split-screen', title: '毎日の操作を1タップにする', desc: 'Split Screen Launcher でアプリ起動の手間を減らす' },
];
