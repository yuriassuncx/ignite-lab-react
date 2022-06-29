import { List, X } from "phosphor-react";
import { useState } from "react";

interface IHeader {
    isSidebarOpened: boolean;
    onSidebarOpened(): void;
}

export function Header(props: IHeader) {
    return (
        <header className="w-full py-5 flex justify-between lg:items-center lg:justify-center bg-gray-700 border-b border-gray-600">
            <div className="text-lg lg:text-3xl justify-center lg:justify-start flex space-x-2 px-4">
                <strong>Ignite Lab</strong>
                <p className="text-green-500">|</p>
                <p className="text-gray-200">REACT</p>
            </div>
            <div className="flex gap-2 lg:hidden">
                <h1 className="text-gray-200">Aulas</h1>
                {!props.isSidebarOpened ? (
                    <List
                        size={24}
                        className="mr-6 cursor-pointer text-blue-500 lg:hidden"
                        onClick={props.onSidebarOpened}
                    />
                ) : (
                    <X
                        size={24}
                        className="mr-6 cursor-pointer text-blue-500 lg:hidden"
                        onClick={props.onSidebarOpened}
                    />
                )}
            </div>
        </header>
    );
}