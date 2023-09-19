import { FileVideo, Upload } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function VideoInputForm() {
  return (
    <form className="space-y-6">
      <label htmlFor="video" className="border flex rounded-sm aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover: bg-white/5">
        <FileVideo className="w-4 h-4" />
        Selecionar vídeo
      </label>
      <input type="file" id="video" accept="video/mp4" className="sr-only" />
      <Separator />
      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
        <Textarea
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Inclua palavras chaves do vídeo separadas por vírgula (,)"
        ></Textarea>
      </div>
      <Button type="submit" className="w-full">
        Carregar vídeo
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </form>
  )
}