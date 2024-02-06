export function NoteCard(){
    return(
        <button className="rounded-md text-left bg-slate-800 overflow-hidden relative outline-none p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">

            <span className="text-sm font-medium text-slate-300">
            Há 4 dias
            </span>

            <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dignissimos, 
            quia repellat officiis quos 
            deserunt assumenda error, totam qui,
            id distinctio voluptatum rerum perferendis inventore dicta hic dolor numquam. Laboriosam!
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"/>
        </button>
    )
}