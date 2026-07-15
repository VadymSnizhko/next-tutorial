// app/notes/filter/[...slug]/page.tsx

import PageContainer from "@/components/PageContainer/PageContainer"

import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  const response = await getNotes(category);

 // console.log(slug)
 // console.log(category)

  const handleGoBack = () => {};

  return (
    <div>
      <PageContainer
      title="Notes List"
      >
        {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
      </PageContainer>

    </div>
      
  );
};

export default NotesByCategory;
