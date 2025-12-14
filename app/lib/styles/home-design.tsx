import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hiddenId: {
    height: 0,
    width: 0,
    opacity: 0,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtext: {
    fontSize: 14,
    color: '#555',
  },
  cardTimestamp: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 16,
    position: 'relative',
  },
  leftActiveContainer: {
    position: 'absolute',
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'green',
  },
  headerTitle: {
    fontSize: 16,
    left: 12,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    right: 16,
    padding: 8,
    backgroundColor: '#FF3B30',
    borderRadius: 6,
  },
  logoutText: {
    color: 'white',
    fontSize: 14,
  },
  activeImage: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
});
