import * as React from "react"
import './HelloWorldComponent.css';

export interface Props {
    children?: React.ReactNode;
    name?: string;
    enthusiasmLevel?: number;
}

export interface State {
}


export default class HelloWorldComponent extends React.Component<Props, State> {
    private _enthusiasmLevel: number;
    private _name: string;

    constructor(props: Props) {
        super(props)
        this._enthusiasmLevel = props.enthusiasmLevel || 0;
        this._name = props.name || 'Vlad Silin';

        this.state = {
        }
    }

    private getExclamationMarks() {
        return this._enthusiasmLevel === 0 ? '.' : '!'.repeat(this._enthusiasmLevel);
    }

    render() {
        return (
            <div>
                <h1>Hello, {this._name + this.getExclamationMarks()}</h1>
            </div>
        )
    }
}
