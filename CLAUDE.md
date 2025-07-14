# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## プロジェクト概要

TypeScriptサポートを含むReact Native/Expoプロジェクトです。Expo
53の新アーキテクチャが有効化されており、iOS、Android、Webプラットフォームをサポートしています。

## 開発コマンド

```bash
# 開発サーバーの開始
pnpm start

# プラットフォーム固有の開発
pnpm android    # Android開発
pnpm ios        # iOS開発
pnpm web        # Web開発

# コード品質
pnpm typecheck  # TypeScript型チェック
pnpm lint       # ESLintコードリンティング
pnpm lint:fix   # リンティング問題の自動修正
pnpm format     # Prettierフォーマットチェック
pnpm format:fix # フォーマットの自動修正

# クリーンアップ
pnpm clean      # キャッシュ、ビルド成果物、node_modulesのクリーン
```

## アーキテクチャ

- **エントリーポイント**: `src/screens/app.tsx` -
  Expoに登録されたメインアプリケーションコンポーネント
- **TypeScript設定**: `@/*`が`src/*`を指すパスマッピングが設定済み
- **Strict TypeScript**: 包括的な型チェックが有効
- **Expo設定**: `app.json`でクロスプラットフォーム設定を定義

## コードスタイルと標準

- Strictモードが有効なTypeScriptを使用
- ESLint設定はexpo/flatをベースにカスタムTypeScriptルールを追加
- インラインスタイルでの一貫した型インポートを推奨（`import { type FC }`）
- アンダースコアプレフィックス例外での未使用変数警告
- コード品質強制のためのHuskyプリコミットフック

## プロジェクト構造

```
src/
  screens/        # アプリケーションスクリーン/コンポーネント
    app.tsx       # メインアプリエントリーポイント
```

現在のプロジェクトは最小限の構造で、components、hooks、utilsなどの典型的なReact
Nativeパターンへの拡張余地があります。
