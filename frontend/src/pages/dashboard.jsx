import Note from '../components/note'
import Footer from '../components/footer';
import NoteAddButton from '../components/noteAddButton';

export const Dashboard = () => {
  return (
    <>
      <Note />
      <NoteAddButton />
      <Footer />
    </>
  )
}

export default Dashboard;