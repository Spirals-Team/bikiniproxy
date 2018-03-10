# Output to PNG, with Verdana 8pt font
set terminal pdf nocrop enhanced font 'Helvetica,8' size 9cm,4.5cm

# Don't show the legend in the chart
set nokey

# Thinner, filled bars
set boxwidth 0.6 relative
set style fill solid 1.00

# Rotate X labels and get rid of the small stripes at the top (nomirror)
set xtics nomirror rotate by -70

# Show human-readable Y-axis. E.g. "100 k" instead of 100000.
set format y '%.0s %c'

# Replace small stripes on the Y-axis with a horizontal gridlines
set tic scale 0
set grid ytics lc rgb "#505050"

# Remove border around chart
unset border