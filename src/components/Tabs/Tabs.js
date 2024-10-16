import React, { useState } from 'react';
import styles from './Tabs.module.css'; // Import styles
import TabContent from './TabContent'; // Import TabContent
import SellerCentralTabContent from './SellerCentralTabContent'; // Import SellerCentralTabContent
import { FiMail } from "react-icons/fi";
import profileImage from './images/profile.jpg';
import editProfileIcon from './images/edit-profile.png';
import myOrderIcon from './images/my-orders.png';
import accountSettingIcon from './images/account-settings.png';
import logoutIcon from './images/logout.png';
import { MdVerifiedUser } from "react-icons/md";
import addDomainsIcon from './images/add-domain-icon.png';

const Tabs = () => {
    // Main tabs
    const tabs = [
        { label: 'My Orders', icon: myOrderIcon },
        { label: 'My Offers', icon: '' },
        { label: 'My Auctions', icon: editProfileIcon },
        { label: 'My Support', icon: editProfileIcon },
        { label: 'Sellers Central', icon: editProfileIcon },
    ];

    // State management
    const [activeTab, setActiveTab] = useState(tabs[0].label); // Default active tab
    const [sellerCentralTab, setSellerCentralTab] = useState('Add New Domain'); // Default inner tab

    // Inner tabs for Sellers Central
    const sellerCentralTabs = [
        { label: 'Add New Domain', icon: addDomainsIcon, content: 'This is the content for Add New Domain.' },
        { label: 'Dashboard', icon: addDomainsIcon, content: 'This is the content for Dashboard.' },
        { label: 'Sales', icon: addDomainsIcon, content: 'This is the content for Sales.' },
        { label: 'Domains', icon: addDomainsIcon, content: 'This is the content for Domains.' },
        { label: 'Manage Offers', icon: addDomainsIcon, content: 'This is the content for Manage Offers.' },
        { label: 'Wallet/Banking', icon: addDomainsIcon, content: 'This is the content for Wallet/Banking.' },
    ];

    return (
        <div className={`${styles.tabs} ${styles.ws_container}`}>
            <div className={styles.tabs_lists}>
                {/* Profile Section */}
                <div className={styles.profileSection}>
                    <div className={`${styles.profileDetails} ${styles.ws_flex}`}>
                        <img src={profileImage} alt="Profile" className={styles.profileImage} />
                        <MdVerifiedUser />
                        <div className={styles.profileInfo}>
                            <h2 className={styles.profileName}>John Doe</h2>
                            <p className={styles.profileEmail}>john.doe@example.com</p>
                        </div>
                    </div>
                    <div className={styles.profile_detail_buttons}>
                        <button className={`${styles.editProfileButton} ${styles.button_icon_wrapper}`}>
                            <img src={editProfileIcon} alt="Edit Profile" className={styles.icon} />
                            Edit Profile
                        </button>
                        <div className={styles.p_relative}>
                            <FiMail className={styles.mailIcon} />
                            <span className={styles.mailNotifications}><p>2</p></span>
                        </div>
                    </div>
                </div>

                {/* Main Tab Buttons */}
                <div className={styles.tabLabels}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`${styles.tabButton} ${styles.button_icon_wrapper} ${tab.label === activeTab ? styles.active : ''}`}
                            role="tab" // Accessibility role
                            aria-selected={tab.label === activeTab} // Accessibility attribute
                        >
                            <img src={tab.icon} alt={`${tab.label} icon`} className={styles.tabIcon} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Footer for additional options */}
                <ul className={styles.tabs_list_footer}>
                    <li className={styles.button_icon_wrapper}>
                        <img src={accountSettingIcon} alt='Account settings icon' />
                        Account Settings
                    </li>
                    <li className={styles.button_icon_wrapper}>
                        <img src={logoutIcon} alt='Logout icon' />
                        Log Out
                    </li>
                </ul>
            </div>

            {/* Render TabContent based on active main tab */}
            <div className={styles.tabContent}>
                <TabContent activeTab={activeTab} />
            </div>

            {/* Seller Central Inner Tabs */}
            {
                activeTab === 'Sellers Central' && (
                    <>
                        <div className={styles.sellerCentralInnerTabs}>
                            {sellerCentralTabs.map((tab) => (
                                <button
                                    key={tab.label}
                                    onClick={() => setSellerCentralTab(tab.label)}
                                    className={`${styles.tabButton} ${styles.button_icon_wrapper} ${sellerCentralTab === tab.label ? styles.active : ''} ${tab.label === 'Add New Domain' ? styles.specialButton : ''}`}
                                >
                                    <img src={tab.icon} alt={`${tab.label} icon`} className={styles.tabIcon} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Render content for the selected inner tab */}
                        <div className={styles.innerTabContent}>
                            <SellerCentralTabContent activeInnerTab={sellerCentralTab} />
                        </div>
                    </>
                )
            }
        </div >
    );
};

export default Tabs;
