export interface RepoListProps {
  username: string;
  onSelectRepo: (repo: { owner: string; name: string }) => void;
}
