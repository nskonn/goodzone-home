import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpack from 'webpack';

// TODO: добавить автообработку расширений при импорте
// @ts-ignore
import { SHARED_MODULES } from './tools/consts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type SharedConfig = {
    singleton: boolean;
    requiredVersion: string | false;
};

type Shared = {
    [packageName: string]: SharedConfig;
};

const createSharedConfig = (modules: string[]) => {
    return modules.reduce<Shared>((shared, pkg) => {
        shared[pkg] = {
            singleton: true,
            requiredVersion: false,
        };
        return shared;
    }, {});
};

export default {
    entry: './src/app/index.tsx',
    mode: 'development',
    devServer: {
        port: 3001,
        historyApiFallback: true,
        static: path.join(__dirname, 'public'),
        hot: true,
    },
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'auto',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            pages: path.resolve(__dirname, 'src/pages'),
            routing: path.resolve(__dirname, 'src/routing'),
        },
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: 'home',
            filename: 'remoteEntry.js',
            exposes: {
                './HomePageMF': './src/pages/HomePageMF',
            },
            shared: createSharedConfig(SHARED_MODULES),
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
};
