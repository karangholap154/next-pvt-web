export interface StudyNote {
  id: string;
  title: string;
  downloadUrl: string; // Maps to download_url in database
  branch: string;
  semester: number;
  youtubeUrl?: string; // Maps to youtube_url in database
  slug?: string;
  description?: string;
  keywords?: string[];
  category?: string;
  difficulty_level?: string;
  views_count?: number;
  published_at?: string;
}

export interface DBStudyNote {
  id: string;
  title: string;
  download_url: string;
  branch: string;
  semester: number;
  youtube_url?: string;
  slug?: string;
  description?: string;
  keywords?: string[];
  category?: string;
  difficulty_level?: string;
  views_count?: number;
  published_at?: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  feature_image: string;
  tags: string[];
  slug: string;
  views_count?: number;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
}

export type Branch = 'Computer' | 'AIML' | 'Information Technology' | 'Mechanical' | 'Chemical';
export type Semester = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
