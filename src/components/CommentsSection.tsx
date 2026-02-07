import { useState } from "react";
import { useComments } from "../hooks/useComments";
import { useAuth } from "../context/AuthContext";

function fmtDate(ts: any) {
  try {
    const d = ts?.toDate?.() ? ts.toDate() : null;
    return d ? d.toLocaleString() : "";
  } catch {
    return "";
  }
}

export function CommentsSection({ listingId }: { listingId: string }) {
  const { user, profile } = useAuth();
  const { threads, createComment, loading } = useComments(listingId);

  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!user) return alert("Debes iniciar sesión.");
    if (!profile?.username) return alert("Primero elige un username.");
    if (!text.trim()) return;

    setBusy(true);
    try {
      await createComment(text.trim(), null);
      setText("");
    } catch (e: any) {
      alert("No se pudo comentar.");
    } finally {
      setBusy(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-8 rounded-xl border border-white/10 bg-[#1F1F1F] p-4 text-white">
        Cargando comentarios...
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-xl border border-white/10 bg-[#1F1F1F] p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-white">Foro</h3>

      <div className="mt-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-[90px] rounded-xl border border-white/10 bg-black/30 p-3 text-white outline-none focus:border-red-500"
          placeholder={user ? "Escribe un comentario..." : "Inicia sesión para comentar..."}
          disabled={!user || busy}
        />
        <button
          onClick={submit}
          disabled={!user || busy || !text.trim()}
          className="px-4 py-2 mt-3 font-semibold text-white bg-red-600 rounded-xl hover:bg-red-500 disabled:opacity-60"
        >
          Publicar
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {threads.length === 0 ? (
          <div className="text-sm text-neutral-400">Aún no hay comentarios.</div>
        ) : (
          threads.map((t) => (
            <CommentItem
              key={t.id}
              listingId={listingId}
              id={t.id}
              username={t.username}
              text={t.text}
              createdAt={t.createdAt}
              replies={t.replies}
            />
          ))
        )}
      </div>
    </div>
  );
}

function CommentItem(props: {
  listingId: string;
  id: string;
  username: string;
  text: string;
  createdAt: any;
  replies: Array<{ id: string; username: string; text: string; createdAt: any }>;
}) {
  const { user, profile } = useAuth();
  const { createComment } = useComments(props.listingId);

  const [replyOpen, setReplyOpen] = useState(false);
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);

  const sendReply = async () => {
    if (!user) return alert("Debes iniciar sesión.");
    if (!profile?.username) return alert("Primero elige un username.");
    if (!reply.trim()) return;

    setBusy(true);
    try {
      await createComment(reply.trim(), props.id);
      setReply("");
      setReplyOpen(false);
    } catch {
      alert("No se pudo responder.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="p-4 border rounded-xl border-white/10 bg-black/20">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-white">@{props.username}</div>
        <div className="text-xs text-neutral-500">{fmtDate(props.createdAt)}</div>
      </div>

      <div className="mt-2 text-sm whitespace-pre-wrap text-neutral-200">{props.text}</div>

      <div className="flex items-center gap-3 mt-3">
        <button
          onClick={() => setReplyOpen((v) => !v)}
          className="text-xs font-medium text-red-400 hover:text-red-300"
        >
          {replyOpen ? "Cancelar" : "Responder"}
        </button>
      </div>

      {replyOpen && (
        <div className="mt-3">
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full min-h-[70px] rounded-xl border border-white/10 bg-black/30 p-3 text-white outline-none focus:border-red-500"
            placeholder="Escribe tu respuesta..."
            disabled={!user || busy}
          />
          <button
            onClick={sendReply}
            disabled={!user || busy || !reply.trim()}
            className="px-3 py-2 mt-2 text-sm text-white rounded-xl bg-white/10 hover:bg-white/15 disabled:opacity-60"
          >
            Enviar
          </button>
        </div>
      )}

      {props.replies.length > 0 && (
        <div className="pl-3 mt-4 space-y-3 border-l border-white/10">
          {props.replies.map((r) => (
            <div key={r.id} className="p-3 border rounded-xl bg-black/20 border-white/5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold text-white">@{r.username}</div>
                <div className="text-[11px] text-neutral-500">{fmtDate(r.createdAt)}</div>
              </div>
              <div className="mt-1 text-sm whitespace-pre-wrap text-neutral-200">{r.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
