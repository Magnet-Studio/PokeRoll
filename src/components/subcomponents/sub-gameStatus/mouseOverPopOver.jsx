import React, {useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export function MouseOverPopover({ content, shown, reference, notTab, shouldBeRead }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isPopoverHovered, setIsPopoverHovered] = useState(false);

    let sbr = shouldBeRead;

    if (typeof(shouldBeRead) == "undefined") {
      sbr = true;
    }

    let ref = null;
    if(reference)
    {
      ref = reference;
    }

    let tabIndexValue = 0;
    if(notTab)
    {
      tabIndexValue = -1;
    }

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      if (!isPopoverHovered) {
        setAnchorEl(null);
      }
    };

    const handlePopoverLeave = () => {
      setIsPopoverHovered(false);
      setAnchorEl(null);
    };

    const handlePopoverEnter = () => {
      setIsPopoverHovered(true);
    };

    const open = Boolean(anchorEl);

    return (
      <div style={{ display: 'inline-block'}} aria-label={sbr ? "Esto es información, " + shown : ""} 
      tabIndex={tabIndexValue} ref={ref} role={sbr ? "contentinfo" : ""}>
        <Typography
          className="Typography-hoverContent infoIcon"
          aria-owns={open ? 'mouse-over-popover' : undefined}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {content}
        </Typography>
        <Popover
          id="mouse-over-popover"
          className="TypographyText"
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          disableRestoreFocus
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'top'
          }}
          onMouseEnter={handlePopoverEnter}
          onMouseLeave={handlePopoverLeave}
          sx={{ maxWidth: "75vw",
                maxHeight: "auto"
           }}
        >
          <Typography sx={{ p: 2 }}>
            <span>{shown}</span>
          </Typography>
        </Popover>
      </div>
    );
}