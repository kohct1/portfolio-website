function MouseEffect({ mousePosition }: { mousePosition: MousePosition }) {
    return (
        <div className="w-64 h-64 absolute bg-white rounded-full blur-[256px] pointer-events-none max-lg:hidden" style={{ left: mousePosition.x, top: mousePosition.y }}></div>
    );
}

export default MouseEffect
