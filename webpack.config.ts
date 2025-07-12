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

export default (env: Record<string, string>) => {
    const isDev = !!env.development;
    const isLocalStart = env.LOCAL_START;

    return {
        entry: isLocalStart ? './src/app/index.tsx' : './src/app/bootstrap.tsx',
        mode: isDev ? 'development' : 'production',
        devServer: {
            port: 3001,
            historyApiFallback: true,
            static: path.join(__dirname, 'dist'),
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
                app: path.resolve(__dirname, 'src/app'),
                pages: path.resolve(__dirname, 'src/pages'),
                routing: path.resolve(__dirname, 'src/routing'),
                widgets: path.resolve(__dirname, 'src/widgets'),
                shared: path.resolve(__dirname, 'src/shared'),
            },
        },
        plugins: [
            new webpack.container.ModuleFederationPlugin({
                name: 'home',
                filename: 'remoteEntry.js',
                exposes: {
                    './HomePageModule': './src/pages/HomePageModule',
                },
                shared: isLocalStart ? {} : createSharedConfig(SHARED_MODULES),
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
            }),
        ],
    };
};
