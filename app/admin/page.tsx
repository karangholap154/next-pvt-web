'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Edit2, LogOut, Plus } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';

type Note = {
  id: string;
  title: string;
  branch: string;
  semester: number;
  download_url: string;
  slug: string;
  youtube_url?: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);

  const [title, setTitle] = useState('');
  const [branch, setBranch] = useState('Computer');
  const [semester, setSemester] = useState(4);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  // Auto-hide success messages after 3 seconds
  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(''), 3000);
    return () => clearTimeout(t);
  }, [success]);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push('/login');
      } else {
        setLoading(false);
        fetchNotes();
      }
    };
    checkUser();
  }, [router]);

  const fetchNotes = async () => {
    try {
      const { data } = await supabase
        .from('study_notes')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) setNotes(data);
    } catch (err) {
      setError('Error fetching notes');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const slug = title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');

      if (editingId) {
        await supabase
          .from('study_notes')
          .update({
            title,
            branch,
            semester,
            download_url: downloadUrl,
            slug,
            youtube_url: youtubeUrl || null,
          })
          .eq('id', editingId);

        setSuccess('Note updated successfully');
        setEditingId(null);
        setDialogOpen(false);
      } else {
        await supabase.from('study_notes').insert([
          {
            title,
            branch,
            semester,
            download_url: downloadUrl,
            slug,
            youtube_url: youtubeUrl || null,
          },
        ]);

        setSuccess('Note added successfully');
        setDialogOpen(false);
      }

      resetForm();
      fetchNotes();
    } catch (err) {
      setError('Error saving note');
    }
  };

  const resetForm = () => {
    setTitle('');
    setBranch('Computer');
    setSemester(4);
    setDownloadUrl('');
    setYoutubeUrl('');
  };

  const handleEdit = (note: Note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setBranch(note.branch);
    setSemester(note.semester);
    setDownloadUrl(note.download_url);
    setYoutubeUrl(note.youtube_url || '');
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this note?')) return;

    try {
      await supabase.from('study_notes').delete().eq('id', id);
      setSuccess('Note deleted successfully');
      fetchNotes();
    } catch (err) {
      setError('Error deleting note');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 pt-24 pb-12 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
        />
      </main>
    );
  }

  return (
      <main className="min-h-screen bg-zinc-950 pt-24 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 col-span-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <div>
            <h1 className="gradient-brand-text text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-zinc-400 mt-1">Manage study notes — clean, fast, and on-theme.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              onClick={() => {
                resetForm();
                setEditingId(null);
                setDialogOpen(true);
              }}
              icon={<Plus className="w-4 h-4" />}
            >
              Add Note
            </Button>

            <Button
              variant="outline"
              onClick={handleLogout}
              icon={<LogOut className="w-4 h-4" />}
            >
              Logout
            </Button>
          </div>
        </motion.div>

        {/* Success/Error Messages */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 px-4 py-3 rounded-lg glass-subtle border border-red-800/40 text-red-300 col-span-full"
            >
              {error}
            </motion.div>
          )}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 px-4 py-3 rounded-lg glass-subtle border border-green-800/40 text-green-300 col-span-full"
            >
              {success}
            </motion.div>
          )}
        </AnimatePresence>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl">
            <div className="p-4">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold gradient-brand-text">
                  {editingId ? '✏️ Edit Note' : '➕ Add New Note'}
                </DialogTitle>
                <DialogDescription className="text-sm text-zinc-400">
                  Quickly add or edit notes with on-theme controls.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter note title"
                    className="w-full px-4 py-2.5 rounded-lg glass border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[rgba(99,102,241,0.18)] transition-all"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Download URL *
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/download"
                    className="w-full px-4 py-2.5 rounded-lg glass border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[rgba(99,102,241,0.18)] transition-all"
                    value={downloadUrl}
                    onChange={(e) => setDownloadUrl(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    YouTube Embed URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.youtube.com/embed/..."
                    className="w-full px-4 py-2.5 rounded-lg glass border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[rgba(99,102,241,0.18)] transition-all"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Branch</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-lg glass border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[rgba(99,102,241,0.18)]"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                    >
                      <option value="Computer">Computer Science</option>
                      <option value="Information Technology">Information Technology</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Semester</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-lg glass border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-[rgba(99,102,241,0.18)]"
                      value={semester}
                      onChange={(e) => setSemester(Number(e.target.value))}
                    >
                      {[4, 5, 6, 7, 8].map((s) => (
                        <option key={s} value={s}>
                          Semester {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <DialogFooter>
                  <div className="flex gap-3 w-full justify-end">
                    <Button variant="default" type="submit">
                      {editingId ? 'Update Note' : 'Add Note'}
                    </Button>
                    <DialogClose asChild>
                      <Button variant="destructive">Cancel</Button>
                    </DialogClose>
                  </div>
                </DialogFooter>
              </form>
            </div>
          </DialogContent>
        </Dialog>

        {/* Notes Table */}
        <motion.div
          className="col-span-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 15 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">All Notes ({notes.length})</h2>
            <div className="text-sm text-zinc-400">Tip: Use edit/delete to manage notes</div>
          </div>

          {notes.length === 0 ? (
            <Card>
              <div className="p-8 text-center">
                <p className="text-zinc-400">No notes yet. Add your first note using the button above.</p>
              </div>
            </Card>
          ) : (
            <Table>
              <TableHeader>
                <tr>
                  <TableHead className="w-12">Sr. No</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </tr>
              </TableHeader>
              <TableBody>
                {notes.map((note, idx) => (
                  <TableRow key={note.id}>
                    <TableCell className="font-medium text-zinc-300">{idx + 1}</TableCell>
                    <TableCell className="max-w-[40%]">
                      <div className="font-medium text-white truncate">{note.title}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-zinc-400">{note.branch}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-zinc-400">Semester {note.semester}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="inline-flex items-center justify-end gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEdit(note)}
                          className="p-2 rounded-lg glass-subtle border border-zinc-700 text-zinc-200 hover:scale-105 transition-transform"
                          aria-label="Edit note"
                        >
                          <Edit2 className="w-4 h-4" />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDelete(note.id)}
                          className="p-2 rounded-lg glass-subtle border border-zinc-700 text-red-400 hover:scale-105 transition-transform"
                          aria-label="Delete note"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </motion.div>
      </div>
    </main>
  );
}
