import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lumipets_bookings") || "[]");
    setBookings(data.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
  }, []);

  const handleDelete = (id: string) => {
    if(confirm("Are you sure you want to delete this booking?")) {
      const updated = bookings.filter(b => b.id !== id);
      localStorage.setItem("lumipets_bookings", JSON.stringify(updated));
      setBookings(updated);
    }
  };

  const totalBookings = bookings.length;
  const todayBookings = bookings.filter(b => {
    const today = new Date().toISOString().split('T')[0];
    return b.timestamp.startsWith(today);
  }).length;

  const serviceCounts = bookings.reduce((acc, curr) => {
    acc[curr.service] = (acc[curr.service] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const popularService = Object.keys(serviceCounts).length > 0 
    ? Object.keys(serviceCounts).reduce((a, b) => serviceCounts[a] > serviceCounts[b] ? a : b)
    : "None";

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-3xl font-serif font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalBookings}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{todayBookings}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Most Popular Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold truncate">{popularService}</div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-xl shadow-sm border p-4 overflow-x-auto">
        <h2 className="text-xl font-serif font-bold mb-4 px-2">Recent Bookings</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Submitted</TableHead>
              <TableHead>Owner Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Pet Name</TableHead>
              <TableHead>Type/Breed</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Appt Date/Time</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">No bookings found.</TableCell>
              </TableRow>
            ) : (
              bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="text-xs whitespace-nowrap">{new Date(booking.timestamp).toLocaleDateString()}</TableCell>
                  <TableCell className="font-medium">{booking.ownerName}</TableCell>
                  <TableCell>{booking.phone}</TableCell>
                  <TableCell>{booking.petName}</TableCell>
                  <TableCell>{booking.petType} {booking.breed ? `(${booking.breed})` : ''}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {booking.service}
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{booking.date} at {booking.time}</TableCell>
                  <TableCell className="max-w-[150px] truncate" title={booking.notes}>{booking.notes || '-'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(booking.id)} className="text-destructive hover:text-destructive hover:bg-destructive/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}