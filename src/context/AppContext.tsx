import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchUserProfile, fetchCards, fetchTransactions, fetchExpenseStats, fetchBalanceHistory, fetchWeeklyActivity, fetchContacts } from '../services/api';

// Define types
export interface UserProfile {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  dateOfBirth: string;
  permanentAddress: string;
  presentAddress: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface Card {
  id: number;
  type: string;
  number: string;
  holder: string;
  balance: number;
  expiry: string;
}

export interface Transaction {
  id: number;
  type: string;
  description: string;
  amount: number;
  date: string;
  icon: string;
  color: string;
}

export interface ExpenseStat {
  category: string;
  percentage: number;
  color: string;
}

export interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface BalanceData {
  labels: string[];
  values: number[];
}

export interface WeeklyActivityData {
  labels: string[];
  deposits: number[];
  withdrawals: number[];
}

interface AppContextType {
  user: UserProfile | null;
  cards: Card[];
  transactions: Transaction[];
  expenseStats: ExpenseStat[];
  balanceHistory: BalanceData;
  weeklyActivity: WeeklyActivityData;
  contacts: Contact[];
  loading: boolean;
  error: string | null;
  updateUserProfile: (updatedProfile: Partial<UserProfile>) => void;
  pageTitle: string;
  setPageTitle: (title: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [expenseStats, setExpenseStats] = useState<ExpenseStat[]>([]);
  const [balanceHistory, setBalanceHistory] = useState<BalanceData>({ labels: [], values: [] });
  const [weeklyActivity, setWeeklyActivity] = useState<WeeklyActivityData>({ 
    labels: [], 
    deposits: [], 
    withdrawals: [] 
  });
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState<string>('Dashboard');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch all data in parallel
        const [
          userProfile,
          userCards,
          userTransactions,
          userExpenseStats,
          userBalanceHistory,
          userWeeklyActivity,
          userContacts
        ] = await Promise.all([
          fetchUserProfile(),
          fetchCards(),
          fetchTransactions(),
          fetchExpenseStats(),
          fetchBalanceHistory(),
          fetchWeeklyActivity(),
          fetchContacts()
        ]);

        setUser(userProfile);
        setCards(userCards);
        setTransactions(userTransactions);
        setExpenseStats(userExpenseStats);
        setBalanceHistory(userBalanceHistory);
        setWeeklyActivity(userWeeklyActivity);
        setContacts(userContacts);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateUserProfile = async (updatedProfile: Partial<UserProfile>) => {
    if (!user) return;
    
    try {
      // In a real app, you would make an API call here
      // For now, we'll just update the local state
      const updatedUser = { ...user, ...updatedProfile };
      setUser(updatedUser);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      console.error('Error updating profile:', err);
    }
  };

  const value = {
    user,
    cards,
    transactions,
    expenseStats,
    balanceHistory,
    weeklyActivity,
    contacts,
    loading,
    error,
    updateUserProfile,
    pageTitle,
    setPageTitle
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};